import { useEffect, useRef } from 'react'

const THREE_CDN_URL = 'https://cdn.jsdelivr.net/npm/three@latest/build/three.min.js'

let threeLoaderPromise

function loadThreeFromCdn() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window is not available'))
  }

  if (window.THREE) {
    return Promise.resolve(window.THREE)
  }

  if (!threeLoaderPromise) {
    threeLoaderPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[data-three-cdn="${THREE_CDN_URL}"]`)

      if (existingScript) {
        existingScript.addEventListener('load', () => resolve(window.THREE), { once: true })
        existingScript.addEventListener('error', () => reject(new Error('Failed to load Three.js')), {
          once: true,
        })
        return
      }

      const script = document.createElement('script')
      script.src = THREE_CDN_URL
      script.async = true
      script.dataset.threeCdn = THREE_CDN_URL
      script.onload = () => resolve(window.THREE)
      script.onerror = () => reject(new Error('Failed to load Three.js'))
      document.head.appendChild(script)
    })
  }

  return threeLoaderPromise
}

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.55;

    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(p);
      p *= 2.02;
      amplitude *= 0.52;
    }

    return value;
  }

  mat2 rotate2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
    float time = uTime * 0.06;

    vec2 mouse = uMouse * vec2(0.12, 0.08);
    vec2 p = uv * 1.35;
    p.x *= 1.08;
    p += mouse;

    vec2 flow = p;
    flow *= rotate2d(sin(time * 0.4) * 0.18);

    vec2 warpA = vec2(
      fbm(flow * 0.95 + vec2(time * 0.55, -time * 0.42)),
      fbm(flow * 1.0 + vec2(-time * 0.35, time * 0.5))
    ) - 0.5;

    vec2 warpB = vec2(
      fbm((flow + warpA * 1.3) * 1.75 + vec2(-time * 0.7, time * 0.42)),
      fbm((flow - warpA * 1.1) * 1.82 + vec2(time * 0.5, -time * 0.62))
    ) - 0.5;

    vec2 q = flow + warpA * 1.05 + warpB * 0.55;

    float folds = 0.0;
    folds += sin(q.x * 3.4 + q.y * 1.3 - time * 1.5);
    folds += sin(q.y * 4.4 - q.x * 1.7 + time * 1.1);
    folds += sin((q.x + q.y) * 3.0 + fbm(q * 1.8) * 4.2 - time * 0.8);
    folds /= 3.0;

    float turbulence = fbm(q * 2.4 + folds * 0.75 + 3.0);
    float structure = folds + (turbulence - 0.5) * 1.25;

    float ribbons = smoothstep(-0.25, 0.9, structure);
    float darkVeins = 1.0 - smoothstep(-0.95, 0.15, structure);
    float hotCore = smoothstep(0.35, 1.08, structure + turbulence * 0.22);
    float rimLight = smoothstep(0.1, 0.95, abs(structure)) * (1.0 - darkVeins * 0.65);

    vec2 glowCoord = p;
    float highlightA = exp(-2.8 * length(glowCoord - vec2(-0.55, -0.05)));
    float highlightB = exp(-3.6 * length(glowCoord - vec2(0.35, 0.12)));
    float highlightC = exp(-4.0 * length(glowCoord - vec2(0.72, -0.32)));
    float bloomMask = highlightA * 0.95 + highlightB * 0.8 + highlightC * 0.55;

    vec3 deepPurple = vec3(0.102, 0.0, 0.2);
    vec3 midnight = vec3(0.01, 0.0, 0.045);
    vec3 violet = vec3(0.33, 0.1, 0.56);
    vec3 neonPink = vec3(1.0, 0.0, 0.72);
    vec3 lavender = vec3(0.66, 0.34, 0.92);
    vec3 electricBlue = vec3(0.18, 0.34, 0.88);

    vec3 color = mix(midnight, deepPurple, smoothstep(-1.1, 0.9, uv.y + 0.18));
    color = mix(color, violet, ribbons * 0.72);
    color += neonPink * hotCore * 0.52;
    color += lavender * rimLight * 0.18;
    color += electricBlue * smoothstep(0.72, 1.0, turbulence) * 0.07;

    color *= 1.0 - darkVeins * 0.88;
    color += neonPink * bloomMask * 0.18;

    float haze = fbm(uv * 1.2 + vec2(time * 0.22, -time * 0.18));
    color += vec3(0.03, 0.01, 0.06) * haze;

    float vignette = smoothstep(1.38, 0.2, length(uv * vec2(1.0, 1.22)));
    color *= vignette;

    vec3 bloom = color;
    bloom += neonPink * pow(hotCore, 2.2) * 0.16;
    bloom += lavender * pow(rimLight, 2.4) * 0.08;
    bloom += vec3(0.03, 0.0, 0.08) * pow(bloomMask, 1.5);

    gl_FragColor = vec4(bloom, 1.0);
  }
`

export default function LiquidBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    let disposed = false

    loadThreeFromCdn()
      .then((THREE) => {
        if (disposed || !containerRef.current || !THREE) {
          return
        }

        const container = containerRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
        const renderer = new THREE.WebGLRenderer({
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance',
        })

        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))
        renderer.setClearColor(0x04000a, 1)
        renderer.domElement.className = 'liquid-background__canvas'
        container.prepend(renderer.domElement)

        const uniforms = {
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uMouse: { value: new THREE.Vector2(0, 0) },
        }

        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
        })

        const geometry = new THREE.PlaneGeometry(2, 2)
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const mouseTarget = new THREE.Vector2(0, 0)
        const mouseCurrent = new THREE.Vector2(0, 0)
        const clock = new THREE.Clock()

        const handleResize = () => {
          const width = window.innerWidth
          const height = window.innerHeight
          renderer.setSize(width, height, false)
          uniforms.uResolution.value.set(width, height)
        }

        const handlePointerMove = (event) => {
          const x = event.clientX / window.innerWidth
          const y = event.clientY / window.innerHeight
          mouseTarget.set((x - 0.5) * 2.0, (0.5 - y) * 2.0)
        }

        const handlePointerLeave = () => {
          mouseTarget.set(0, 0)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        window.addEventListener('pointermove', handlePointerMove, { passive: true })
        window.addEventListener('pointerleave', handlePointerLeave)

        let lastRenderTime = 0;
        const fpsInterval = 1000 / 30;

        renderer.setAnimationLoop(() => {
          const currentTime = performance.now();
          const elapsed = currentTime - lastRenderTime;

          if (elapsed > fpsInterval) {
            lastRenderTime = currentTime - (elapsed % fpsInterval);
            mouseCurrent.lerp(mouseTarget, 0.03)
            uniforms.uTime.value = clock.getElapsedTime()
            uniforms.uMouse.value.copy(mouseCurrent)
            renderer.render(scene, camera)
          }
        })

        cleanup = () => {
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('pointermove', handlePointerMove)
          window.removeEventListener('pointerleave', handlePointerLeave)
          renderer.setAnimationLoop(null)
          geometry.dispose()
          material.dispose()
          renderer.dispose()

          if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement)
          }
        }
      })
      .catch((error) => {
        console.error('Liquid background failed to initialize.', error)
      })

    return () => {
      disposed = true
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className="liquid-background" aria-hidden="true">
      <div className="liquid-background__aurora" />
      <div className="liquid-background__grain" />
      <div className="liquid-background__vignette" />
    </div>
  )
}
