export default {
  data () {
    return {
      characters: [
        {
          name: 'Akuma',
          rage: [
            {
              name: 'Rage Art',
              command: '1, 1 F+2+3'
            },
            {
              name: 'Super',
              command: 'qcf, qcf+1+2'
            }
          ]
        },
        {
          name: 'Asuka',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'ff+1+2'
            }
          ]
        },
        {
          name: 'Josie',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'ff+1+2'
            }
          ]
        },
        {
          name: 'Kunimitsu',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'ff+1+2'
            }
          ]
        },
        {
          name: 'Lee Chaolan',
          rage: [
            {
              name: 'Rage Art',
              command: 'd+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'df+3+4'
            }
          ]
        },
        {
          name: 'Lucky Chloe',
          rage: [
            {
              name: 'Rage Art',
              command: '3+4'
            },
            {
              name: 'Rage Drive',
              command: 'df+3+4'
            }
          ]
        },
        {
          name: 'Xiaoyu',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'ff+1+2'
            }
          ]
        },
        {
          name: 'Zafina',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+3+4'
            },
            {
              name: 'Rage Drive',
              command: 'f+2+3'
            }
          ]
        }

      ],
      items: ['Akuma', 'Asuka', 'Josie', 'Kunimitsu', 'Lee Chaolan', 'Lucky Chloe', 'Xiaoyu', 'Zafina'],
      akuma: [
        {
          src: '/inputs/ex.svg',
          name: 'EX',
          command: 'EX',
          character: 'Akuma'
        }
      ],
      asuka: [
        {
          src: '/inputs/legcutter.svg',
          name: 'leg cutter',
          command: 'leg cutter',
          character: 'Asuka'
        }
      ],
      josie: [
        {
          src: '/inputs/switchstance.svg',
          name: 'Switch Stance',
          command: 'SWS',
          character: 'Josie'
        }
      ],
      kunimitsu: [
        {
          src: '/inputs/set.svg',
          name: 'SET',
          command: 'SET',
          character: 'kunimitsu'
        },
        {
          src: '/inputs/kat.svg',
          name: 'KAT',
          command: 'KAT',
          character: 'kunimitsu'
        }
      ],
      lee: [
        {
          src: '/inputs/miststep.svg',
          name: 'Mist Step',
          command: 'Mist Step',
          character: 'Lee'
        },
        {
          src: '/inputs/hitman.svg',
          name: 'Hit Man Stance',
          command: 'Hit Man Stance',
          character: 'Lee'
        }
      ],
      luckychloe: [
        {
          src: '/inputs/during-ltwst.svg',
          name: 'Left Twist',
          command: 'Left Twist',
          character: 'Lucky Chloe'
        },
        {
          src: '/inputs/during-rtwst.svg',
          name: 'Right Twist',
          command: 'Right Twist',
          character: 'Lucky Chloe'
        }
      ],
      xiaoyu: [
        {
          src: '/inputs/aop.svg',
          name: 'AOP',
          command: 'AOP',
          character: 'Xiaoyu'
        },
        {
          src: '/inputs/rds.svg',
          name: 'RDS',
          command: 'RDS',
          character: 'Xiaoyu'
        },
        {
          src: '/inputs/hyp.svg',
          name: 'Hypnosis',
          command: 'Hypnosis',
          character: 'Xiaoyu'
        }
      ],
      zafina: [
        {
          src: '/inputs/scarecrow.svg',
          name: 'Scarecrow',
          command: 'scarecrow',
          character: 'Zafina'
        },
        {
          src: '/inputs/mantis.svg',
          name: 'Mantis',
          command: 'Mantis',
          character: 'Zafina'
        },
        {
          src: '/inputs/tarantula.svg',
          name: 'Tarantula',
          command: 'trt',
          character: 'Zafina'
        }
      ],
      luckychloeRage: [
        {
          name: 'Rage Art',
          command: '3+4'
        },
        {
          name: 'Rage Drive',
          command: 'df+3+4'
        }

      ]
    }
  },
  computed: {
    characterSelect () {
      const x = this.characters
      const y = _.map(x, 'name') // [12, 14, 16, 18]

      return y
    }
  }
}
