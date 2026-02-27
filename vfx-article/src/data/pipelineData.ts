import { 
  DocumentTextIcon,
  SwatchIcon,
  CubeIcon,
  CameraIcon,
  FilmIcon,
  SparklesIcon,
  EyeIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export const pipelineStages = [
  {
    id: 'preproduction',
    name: 'Pre-Production',
    description: 'The foundation phase where creative vision meets technical planning. This stage involves script analysis, concept art creation, and establishing the overall visual direction for the project.',
    icon: DocumentTextIcon,
    gradient: 'from-blue-400 to-blue-600',
    deliverables: [
      'Concept art and mood boards',
      'Storyboards and animatics',
      'Technical requirements document',
      'Asset list and scope definition'
    ],
    tools: ['Photoshop', 'Storyboard Pro', 'PureRef', 'Miro'],
    duration: '2-4 weeks'
  },
  {
    id: 'assets',
    name: 'Asset Creation',
    description: 'Building the digital elements that will populate your scenes. This includes modeling characters, props, environments, and creating materials that bring the concept art to life.',
    icon: CubeIcon,
    gradient: 'from-green-400 to-green-600',
    deliverables: [
      '3D models and props',
      'Character rigs and controls',
      'Environment assets',
      'Material libraries and textures'
    ],
    tools: ['Maya', 'Blender', 'Substance Painter', 'ZBrush'],
    duration: '4-8 weeks'
  },
  {
    id: 'lookdev',
    name: 'Look Development',
    description: 'Establishing the visual style and appearance of assets. This phase focuses on materials, lighting, and rendering techniques to achieve the desired artistic vision.',
    icon: SwatchIcon,
    gradient: 'from-purple-400 to-purple-600',
    deliverables: [
      'Material definitions',
      'Lighting setups',
      'Render passes configuration',
      'Style guides and references'
    ],
    tools: ['Arnold', 'V-Ray', 'Substance Designer', 'Mari'],
    duration: '2-3 weeks'
  },
  {
    id: 'layout',
    name: 'Layout & Animation',
    description: 'Positioning elements in 3D space and bringing them to life through motion. This stage establishes camera movements, character performances, and overall timing.',
    icon: CameraIcon,
    gradient: 'from-yellow-400 to-orange-600',
    deliverables: [
      'Scene layouts and camera work',
      'Character animation',
      'Crowd simulation',
      'Timing and blocking'
    ],
    tools: ['Maya', 'Motion Capture', 'Massive', 'Houdini'],
    duration: '3-6 weeks'
  },
  {
    id: 'effects',
    name: 'Effects & Simulation',
    description: 'Creating dynamic elements like fire, water, smoke, and destruction. This stage adds realism and spectacle through physics-based simulations and procedural effects.',
    icon: SparklesIcon,
    gradient: 'from-red-400 to-pink-600',
    deliverables: [
      'Particle effects and simulations',
      'Fluid dynamics',
      'Destruction and debris',
      'Environmental effects'
    ],
    tools: ['Houdini', 'Phoenix FD', 'RealFlow', 'FumeFX'],
    duration: '4-8 weeks'
  },
  {
    id: 'rendering',
    name: 'Rendering',
    description: 'Converting 3D scenes into 2D images with proper lighting, materials, and effects. This computationally intensive stage produces the raw footage for compositing.',
    icon: FilmIcon,
    gradient: 'from-cyan-400 to-cyan-600',
    deliverables: [
      'Beauty renders',
      'Multiple render passes',
      'Deep compositing data',
      'Quality control checks'
    ],
    tools: ['Arnold', 'V-Ray', 'RenderMan', 'Deadline'],
    duration: '2-4 weeks'
  },
  {
    id: 'compositing',
    name: 'Compositing',
    description: 'Combining all rendered elements, live-action plates, and effects into final shots. This stage involves color correction, integration, and achieving photorealistic results.',
    icon: EyeIcon,
    gradient: 'from-indigo-400 to-indigo-600',
    deliverables: [
      'Final composited shots',
      'Color correction and grading',
      'Integration with live action',
      'Stereoscopic conversion (if needed)'
    ],
    tools: ['Nuke', 'After Effects', 'Fusion',],
    duration: '3-5 weeks'
  },
  {
    id: 'delivery',
    name: 'Final Delivery',
    description: 'Preparing final assets for client delivery with proper formatting, quality checks, and documentation. This includes archiving and project wrap-up procedures.',
    icon: RocketLaunchIcon,
    gradient: 'from-emerald-400 to-emerald-600',
    deliverables: [
      'Final rendered sequences',
      
    ],
    tools: ['DaVinci Resolve',   ],
    duration: '1-2 weeks'

  }
];






