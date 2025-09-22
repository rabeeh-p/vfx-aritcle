import { 
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ChartBarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export const kanbanData = {
  columns: [
    {
      id: 'todo',
      name: 'To Do',
      gradient: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/20',
      textColor: 'text-gray-400',
      tasks: [
        {
          id: 'task-1',
          title: 'Character Modeling',
          description: 'Create high-poly model for main character',
          priority: 'High',
          assignee: 'John Doe',
          progress: 0
        },
        {
          id: 'task-2',
          title: 'Environment Concept',
          description: 'Design alien landscape concept art',
          priority: 'Medium',
          assignee: 'Jane Smith',
          progress: 0
        }
      ]
    },
    {
      id: 'progress',
      name: 'In Progress',
      gradient: 'from-yellow-400 to-orange-600',
      bgColor: 'bg-yellow-500/20',
      textColor: 'text-yellow-400',
      tasks: [
        {
          id: 'task-3',
          title: 'Rigging Setup',
          description: 'Character rig with advanced controls',
          priority: 'High',
          assignee: 'Mike Johnson',
          progress: 65
        },
        {
          id: 'task-4',
          title: 'Lighting Pass',
          description: 'Establish lighting for forest scene',
          priority: 'Medium',
          assignee: 'Sarah Wilson',
          progress: 30
        }
      ]
    },
    {
      id: 'review',
      name: 'Review',
      gradient: 'from-blue-400 to-cyan-600',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400',
      tasks: [
        {
          id: 'task-5',
          title: 'Animation Blocking',
          description: 'Character performance review',
          priority: 'High',
          assignee: 'Alex Brown',
          progress: 90
        }
      ]
    },
    {
      id: 'done',
      name: 'Completed',
      gradient: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      tasks: [
        {
          id: 'task-6',
          title: 'Texture Creation',
          description: 'PBR textures for spaceship model',
          priority: 'Medium',
          assignee: 'Lisa Davis',
          progress: 100
        },
        {
          id: 'task-7',
          title: 'Storyboard Approval',
          description: 'Client approved storyboard sequence',
          priority: 'Low',
          assignee: 'Tom Anderson',
          progress: 100
        }
      ]
    }
  ]
};

export const progressData = {
  overview: [
    {
      title: 'Total Tasks',
      value: '156',
      icon: ClipboardDocumentListIcon,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Team Members',
      value: '24',
      icon: UserGroupIcon,
      gradient: 'from-green-400 to-green-600'
    },
    {
      title: 'Completion Rate',
      value: '67%',
      icon: ChartBarIcon,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Days Remaining',
      value: '45',
      icon: CalendarIcon,
      gradient: 'from-red-400 to-red-600'
    }
  ],
  departments: [
    {
      name: 'Modeling Department',
      progress: 85,
      completed: 34,
      inProgress: 8,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Animation Department',
      progress: 62,
      completed: 28,
      inProgress: 12,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Effects Department',
      progress: 45,
      completed: 15,
      inProgress: 18,
      gradient: 'from-red-400 to-red-600'
    },
    {
      name: 'Compositing Department',
      progress: 30,
      completed: 12,
      inProgress: 25,
      gradient: 'from-green-400 to-green-600'
    }
  ],
  timeline: [
    {
      phase: 'Pre-Production',
      description: 'Concept development and planning phase',
      date: 'Weeks 1-2',
      completed: true
    },
    {
      phase: 'Asset Creation',
      description: 'Modeling and texturing of all required assets',
      date: 'Weeks 3-8',
      completed: true
    },
    {
      phase: 'Animation & Layout',
      description: 'Character animation and scene layout',
      date: 'Weeks 9-14',
      completed: false
    },
    {
      phase: 'Effects & Rendering',
      description: 'VFX simulation and final rendering',
      date: 'Weeks 15-20',
      completed: false
    },
    {
      phase: 'Compositing & Delivery',
      description: 'Final compositing and client delivery',
      date: 'Weeks 21-24',
      completed: false
    }
  ]
};
