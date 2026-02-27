/**
 * IRONHELIX Proprietary SaaS Products
 * Add your new SaaS products here as you build them
 */

export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: 'live' | 'beta' | 'coming-soon';
  category?: 'high-end' | 'micro-saas' | 'enterprise';
  pricing: {
    starter: {
      name?: string;
      price: number;
      period: 'month' | 'year';
      features: string[];
      limits: {
        users?: number;
        projects?: number;
        storage?: string;
        requests?: number;
        custom?: string;
      };
    };
    professional: {
      name?: string;
      price: number;
      period: 'month' | 'year';
      features: string[];
      limits: {
        users?: number;
        projects?: number;
        storage?: string;
        requests?: number;
        custom?: string;
      };
      highlighted?: boolean;
    };
    enterprise: {
      name?: string;
      price: 'custom' | number;
      period?: 'month' | 'year';
      features: string[];
      limits?: {
        users?: string;
        projects?: string;
        storage?: string;
        requests?: string;
        custom?: string;
      };
    };
  };
  demoUrl?: string;
  launchDate?: string;
}

export const saasProducts: SaaSProduct[] = [
  // HIGH-END PRODUCTS
  {
    id: 'project-alpha',
    name: 'Project Alpha',
    tagline: 'TikTok Growth Engine',
    description: 'Deep-learning analytics for creator psychology. Unlock latent pattern analysis and predictive trend forecasting to maximize your TikTok growth.',
    icon: '🚀',
    status: 'beta',
    category: 'high-end',
    pricing: {
      starter: {
        name: 'Startup',
        price: 49,
        period: 'month',
        features: [
          '3 TikTok accounts',
          'Basic resonance analytics',
          'Content performance tracking',
          'Weekly insights reports',
          'Email support'
        ],
        limits: {
          custom: '3 Accounts'
        }
      },
      professional: {
        name: 'Pro',
        price: 129,
        period: 'month',
        features: [
          '10 TikTok accounts',
          'Latent pattern analysis',
          'Advanced audience insights',
          'Competitor benchmarking',
          'Real-time trend alerts',
          'Priority support'
        ],
        limits: {
          custom: '10 Accounts'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 499,
        period: 'month',
        features: [
          'Unlimited accounts',
          'Predictive trend forecasting',
          'AI-powered content recommendations',
          'Custom analytics dashboards',
          'API access',
          'Dedicated account manager'
        ],
        limits: {
          custom: 'Unlimited Accounts'
        }
      }
    },
    launchDate: 'Q2 2026'
  },
  {
    id: 'ai-data-architect',
    name: 'AI Data Architect',
    tagline: 'SQL/Python Automation Platform',
    description: 'Automates database architecture and script generation. Full system design with Infrastructure as Code capabilities for modern data teams.',
    icon: '🏗️',
    status: 'beta',
    category: 'high-end',
    pricing: {
      starter: {
        name: 'Startup',
        price: 59,
        period: 'month',
        features: [
          'Unlimited queries',
          '1 Database connection',
          'Auto-generated schemas',
          'Basic Python scripts',
          'Email support'
        ],
        limits: {
          custom: '1 Database'
        }
      },
      professional: {
        name: 'Architect',
        price: 149,
        period: 'month',
        features: [
          'Multi-database support',
          'CI/CD integration',
          'Advanced query optimization',
          'Custom script templates',
          'Version control integration',
          'Priority support'
        ],
        limits: {
          custom: 'Multi-DB Support'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Director',
        price: 399,
        period: 'month',
        features: [
          'Full system design',
          'Infrastructure as Code',
          'Enterprise security compliance',
          'Custom integrations',
          'Dedicated support team',
          'On-premise deployment option'
        ],
        limits: {
          custom: 'Unlimited'
        }
      }
    },
    launchDate: 'Q3 2026'
  },
  {
    id: 'ai-story-shorts',
    name: 'AI StoryShorts',
    tagline: 'AI-Driven Video Production',
    description: 'AI-powered storytelling and video production platform. Create professional video content with custom voice cloning and 4K export capabilities.',
    icon: '🎬',
    status: 'live',
    category: 'high-end',
    pricing: {
      starter: {
        name: 'Startup',
        price: 35,
        period: 'month',
        features: [
          '10 videos per month',
          'HD export (1080p)',
          'Standard voice library',
          'Basic templates',
          'Email support'
        ],
        limits: {
          custom: '10 Videos/month'
        }
      },
      professional: {
        name: 'Creator',
        price: 95,
        period: 'month',
        features: [
          '50 videos per month',
          'Custom voice cloning',
          'Premium templates',
          'Music library access',
          'Brand customization',
          'Priority rendering'
        ],
        limits: {
          custom: '50 Videos/month'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Studio',
        price: 299,
        period: 'month',
        features: [
          'Unlimited videos',
          '4K export quality',
          'Team collaboration',
          'API access',
          'White-label options',
          'Dedicated support'
        ],
        limits: {
          custom: 'Unlimited'
        }
      }
    },
    demoUrl: 'https://ironhelix.vercel.app/demo/storyshorts',
    launchDate: 'Live'
  },
  {
    id: 'project-beta',
    name: 'Project Beta',
    tagline: 'AI-Powered Home Schooling',
    description: 'Adaptive self-tutoring platform for children. Personalized learning paths with full curriculum coverage and parent progress dashboards.',
    icon: '📚',
    status: 'beta',
    category: 'high-end',
    pricing: {
      starter: {
        name: 'Startup',
        price: 19,
        period: 'month',
        features: [
          '1 child profile',
          'Full curriculum access',
          'Adaptive learning paths',
          'Progress tracking',
          'Parent dashboard',
          'Email support'
        ],
        limits: {
          custom: '1 Child'
        }
      },
      professional: {
        name: 'Family',
        price: 39,
        period: 'month',
        features: [
          'Up to 5 children',
          'Multi-grade curriculum',
          'Advanced analytics',
          'Custom learning goals',
          'Weekly progress reports',
          'Priority support'
        ],
        limits: {
          custom: 'Up to 5 Children'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Tutor/School',
        price: 149,
        period: 'month',
        features: [
          'Classroom management',
          'Unlimited students',
          'Progress API access',
          'Custom curriculum builder',
          'Parent communication tools',
          'Dedicated support'
        ],
        limits: {
          custom: 'Unlimited Students'
        }
      }
    },
    launchDate: 'Q2 2026'
  },

  // PROFESSIONAL TOOLS
  {
    id: 'adsflow',
    name: 'AdsFlow 4.0',
    tagline: 'AI Ad Generation Platform',
    description: 'Automated ad creative and copy generation. Create unlimited ad sets with A/B testing insights and API access for seamless integration.',
    icon: '📢',
    status: 'live',
    category: 'enterprise',
    pricing: {
      starter: {
        name: 'Startup',
        price: 29,
        period: 'month',
        features: [
          '20 ad sets per month',
          'AI-generated copy',
          'Basic creative templates',
          'Performance tracking',
          'Email support'
        ],
        limits: {
          custom: '20 Ad Sets/month'
        }
      },
      professional: {
        name: 'Pro',
        price: 89,
        period: 'month',
        features: [
          'Unlimited ad sets',
          'A/B testing insights',
          'Advanced templates',
          'Multi-platform export',
          'Performance analytics',
          'Priority support'
        ],
        limits: {
          custom: 'Unlimited'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 250,
        period: 'month',
        features: [
          'Everything in Pro',
          'API access',
          'White labeling',
          'Custom integrations',
          'Team collaboration',
          'Dedicated support'
        ],
        limits: {
          custom: 'Enterprise Scale'
        }
      }
    },
    demoUrl: 'https://ironhelix.vercel.app/demo/adsflow',
    launchDate: 'Live'
  },
  {
    id: 'whatsapp-ecomm',
    name: 'WhatsApp E-comm',
    tagline: 'Commerce Platform via WhatsApp',
    description: 'Automated sales for the Ugandan/Global market via WhatsApp. Handle orders, inventory sync, and multi-agent support seamlessly.',
    icon: '🛒',
    status: 'live',
    category: 'enterprise',
    pricing: {
      starter: {
        name: 'Startup',
        price: 15,
        period: 'month',
        features: [
          'Up to 500 orders/month',
          'Basic order management',
          'WhatsApp integration',
          'Payment processing',
          'Email support'
        ],
        limits: {
          custom: '500 Orders/month'
        }
      },
      professional: {
        name: 'Business',
        price: 45,
        period: 'month',
        features: [
          'Unlimited orders',
          'Inventory sync',
          'Customer management',
          'Analytics dashboard',
          'Priority support',
          'Multi-currency support'
        ],
        limits: {
          custom: 'Unlimited Orders'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 120,
        period: 'month',
        features: [
          'Multi-agent support',
          'Custom CRM integration',
          'Advanced automation',
          'API access',
          'White-label options',
          'Dedicated support'
        ],
        limits: {
          custom: 'Enterprise Scale'
        }
      }
    },
    launchDate: 'Live'
  },

  // MICRO-SAAS TOOLS
  {
    id: 'turboscribe-alt',
    name: 'TurboScribe Alt',
    tagline: 'High-Speed Audio Transcription',
    description: 'Ultra-fast transcription and translation with priority GPU processing. Self-hosting options available for enterprise customers.',
    icon: '⚡',
    status: 'live',
    category: 'micro-saas',
    pricing: {
      starter: {
        name: 'Startup',
        price: 12,
        period: 'month',
        features: [
          'Unlimited uploads',
          'Standard speed processing',
          'Multi-language support',
          'Export to multiple formats',
          'Email support'
        ],
        limits: {
          custom: 'Standard Speed'
        }
      },
      professional: {
        name: 'Turbo',
        price: 30,
        period: 'month',
        features: [
          'Priority GPU processing',
          '5x faster transcription',
          'Advanced formatting',
          'Speaker identification',
          'Priority support',
          'API access'
        ],
        limits: {
          custom: 'Priority Processing'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Enterprise',
        price: 100,
        period: 'month',
        features: [
          'Custom deployment',
          'Self-hosting options',
          'Unlimited processing',
          'Advanced integrations',
          'SLA guarantees',
          'Dedicated support'
        ],
        limits: {
          custom: 'Self-Hosted Available'
        }
      }
    },
    demoUrl: 'https://ironhelix.vercel.app/demo/turboscribe',
    launchDate: 'Live'
  },
  {
    id: 'content-repurposer',
    name: 'Content Repurposer',
    tagline: 'Video to Social Posts AI',
    description: 'Turns one video or article into 10+ social posts. Auto-scheduling and multiple client workspaces for agencies.',
    icon: '♻️',
    status: 'live',
    category: 'micro-saas',
    pricing: {
      starter: {
        name: 'Startup',
        price: 15,
        period: 'month',
        features: [
          '5 repurposing cycles/month',
          'AI content generation',
          'Social media optimization',
          'Basic templates',
          'Email support'
        ],
        limits: {
          custom: '5 Cycles/month'
        }
      },
      professional: {
        name: 'Growth',
        price: 40,
        period: 'month',
        features: [
          'Unlimited repurposing',
          'Auto-scheduling',
          'Platform integration',
          'Analytics tracking',
          'Custom templates',
          'Priority support'
        ],
        limits: {
          custom: 'Unlimited'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Agency',
        price: 90,
        period: 'month',
        features: [
          'Multiple client workspaces',
          'White-label reports',
          'Team collaboration',
          'API access',
          'Bulk operations',
          'Dedicated support'
        ],
        limits: {
          custom: 'Multi-Client'
        }
      }
    },
    launchDate: 'Live'
  },
  {
    id: 'scepter',
    name: 'Scepter',
    tagline: 'Linux-Optimized Transcription',
    description: 'Specialized transcription for Linux power users. CLI access and API integrations for seamless workflow automation.',
    icon: '🐧',
    status: 'live',
    category: 'micro-saas',
    pricing: {
      starter: {
        name: 'Startup',
        price: 10,
        period: 'month',
        features: [
          '10 hours of audio',
          'Linux native support',
          'Basic CLI tools',
          'Multi-format export',
          'Email support'
        ],
        limits: {
          custom: '10 Hours/month'
        }
      },
      professional: {
        name: 'Power User',
        price: 25,
        period: 'month',
        features: [
          '50 hours of audio',
          'Batch processing',
          'Advanced CLI tools',
          'Custom scripts',
          'Priority processing',
          'Priority support'
        ],
        limits: {
          custom: '50 Hours/month'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Dev Tier',
        price: 60,
        period: 'month',
        features: [
          'Unlimited hours',
          'Full CLI access',
          'API integrations',
          'Webhook support',
          'Custom deployments',
          'Dedicated support'
        ],
        limits: {
          custom: 'Unlimited'
        }
      }
    },
    launchDate: 'Live'
  },
  {
    id: 'habitstack-pro',
    name: 'HabitStack Pro',
    tagline: 'AI-Optimized Productivity',
    description: 'AI-optimized habit tracking and routine building. Team accountability loops and client management for coaches.',
    icon: '✅',
    status: 'live',
    category: 'micro-saas',
    pricing: {
      starter: {
        name: 'Startup',
        price: 10,
        period: 'month',
        features: [
          'Personal habit tracking',
          'AI routine optimization',
          'Daily reminders',
          'Progress analytics',
          'Email support'
        ],
        limits: {
          custom: 'Personal Use'
        }
      },
      professional: {
        name: 'Team',
        price: 30,
        period: 'month',
        features: [
          'Team accountability loops',
          'Shared goals',
          'Team analytics',
          'Custom integrations',
          'Priority support',
          'Advanced insights'
        ],
        limits: {
          custom: 'Team Features'
        },
        highlighted: true
      },
      enterprise: {
        name: 'Coach',
        price: 75,
        period: 'month',
        features: [
          'Client management',
          'Custom templates',
          'White-label options',
          'Progress reporting',
          'API access',
          'Dedicated support'
        ],
        limits: {
          custom: 'Coaching Tools'
        }
      }
    },
    launchDate: 'Live'
  }
];

// Helper function to get active products (live or beta)
export const getActiveProducts = () => {
  return saasProducts.filter(p => p.status !== 'coming-soon');
};

// Helper function to get products by status
export const getProductsByStatus = (status: SaaSProduct['status']) => {
  return saasProducts.filter(p => p.status === status);
};

// Helper function to get products by category
export const getProductsByCategory = (category: 'high-end' | 'micro-saas' | 'enterprise') => {
  return saasProducts.filter(p => p.category === category);
};

// Helper function to get high-end anchor products
export const getAnchorProducts = () => {
  return saasProducts.filter(p => p.category === 'high-end');
};

// Helper function to get volume products
export const getVolumeProducts = () => {
  return saasProducts.filter(p => p.category === 'micro-saas');
};
