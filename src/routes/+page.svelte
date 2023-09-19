
<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte'
  </script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="basis-2/4 h-96 ">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
      <div>
        <h1 class="text-5xl font-bold">Find parts in 3D</h1>
        <p class="py-6">It's easy to find parts when using our solution</p>
        <button class="btn btn-primary">Become a partner</button>
      </div>
    </div>
  </div>
