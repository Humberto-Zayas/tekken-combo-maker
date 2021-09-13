export default {
  data () {
    return {
      characters: [
        {
          name: 'Akuma',
          tier: 'S-Tier',
          types: [
            [
              'Meter', 'purple', 'darken-3'
            ],
            [
              'Execution-Heavy', 'red', 'darken-3'
            ]

          ],
          color: 'red darken-4',
          rage: [
            {
              name: 'Rage Art',
              command: '1, 1 F+2+3'
            },
            {
              name: 'Super',
              command: 'qcf, qcf+1+2'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'j.d+3  f,f+2:1',
                '2,qcb+4',
                '2,dp+2'
              ]
            },
            {
              wallBreak: [
                'wr+1',
                'ff+2:1',
                '1, 2'
              ]
            },
            {
              floorBreak: [
                'df+1, 2',
                'f+1+2',
                'wr+3'
              ]
            }
          ]
        },
        {
          name: 'Asuka',
          tier: 'A-Tier',
          types: [
            [
              'Counter Hit', 'orange', 'darken-4'
            ]
          ],
          color: 'blue',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'ff+1+2'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'db+4, 2',
                'df+3'
              ]
            },
            {
              wallBreak: [
                'fff+3',
                'f+1+2',
                'ff+2, 1'
              ]
            },
            {
              floorBreak: [
                'ff+1',
                'd+2',
                '2, 1, d+1+2'
              ]
            }
          ]
        },
        {
          name: 'Josie',
          tier: 'B-Tier',
          types: [
            ['Poking',
              'blue', 'darken-3'],
            ['Stance',
              'purple', 'darken-3']
          ],
          color: 'amber darken-4',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'f,n,d,df+3+4'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'df+1, 2~F 1,3',
                'f+2, 4',
                'uf+3+4'

              ]
            },
            {
              wallBreak: [
                'ff+3',
                '3, f+3',
                'uf+3+4'

              ]
            },
            {
              floorBreak: [
                'f,n,d,df+1+2',
                'd+2'
              ]
            }
          ]
        },
        {
          name: 'Kunimitsu',
          tier: 'S-Tier',
          types: [
            ['Bullsh*t',
              'brown',
              'darken-5'],
            ['Poking',
              'blue',
              'darken-3'],
            ['Setup',
              'indigo',
              'darken-3']
          ],
          color: 'deep-purple',
          rage: [
            {
              name: 'Rage Art',
              command: 'd+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'f+2+3'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'df+1, 3',
                'SET 1, 2',
                'b+4'

              ]
            },
            {
              wallBreak: [
                'qcf+1+2',
                'SET 1, 2',
                'fff+3'

              ]
            },
            {
              floorBreak: [
                'd+1',
                'df+3+4'

              ]
            }
          ]
        },
        {
          name: 'Lee Chaolan',
          tier: 'A-Tier',
          types: [
            ['Stance',
              'purple', 'darken-3'],
            ['Execution-Heavy',
              'red', 'darken-3']
          ],
          color: 'deep-purple accent-4',
          rage: [
            {
              name: 'Rage Art',
              command: 'd+1+2'
            },
            {
              name: 'Rage Drive',
              command: 'df+3+4'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'df+3, 2 3',
                'f+2, 1',
                'd+2'

              ]
            },
            {
              wallBreak: [
                'ff+3',
                'f+2, 1'

              ]
            },
            {
              floorBreak: [
                'f+3+4',
                'f+4, 3'

              ]
            }
          ]
        },
        {
          name: 'Lucky Chloe',
          tier: 'B-Tier',
          types: [
            ['Poking',
              'blue', 'darken-3'],
            ['Hybrid',
              'green', 'darken-3']
          ],
          color: 'pink darken-2',
          rage: [
            {
              name: 'Rage Art',
              command: '3+4'
            },
            {
              name: 'Rage Drive',
              command: 'df+3+4'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'f+2, 1+2',
                'ff+3',
                'f+3',
                'df+2:4',
                'f+2, 1+2',
                'f+2, 1'
              ]
            },
            {
              wallBreak: [
                'f+2, 1+2',
                'f+2, 1',
                'f+1+2',
                'b+3',
                'fff+3+4'
              ]
            },
            {
              floorBreak: [
                'f+2, 2',
                'd+2',
                'b+2',
                'f+3+4',
                'u+3+4'
              ]
            }
          ]
        },
        {
          name: 'Xiaoyu',
          types: [
            ['Setup',
              'indigo', 'darken-3'],
            ['Stance',
              'purple', 'darken-3']
          ],
          tier: 'B-Tier',
          color: 'orange',
          rage: [
            {
              name: 'Rage Art',
              command: 'b+1+2 (or AOP b+1+2)'
            },
            {
              name: 'Rage Drive',
              command: 'RDS d+3,3+4'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'f+2, 1',
                'ff+2, 1'

              ]
            },
            {
              wallBreak: [
                'db+1',
                'AOP 2, 1',
                '1, 2 ,1'

              ]
            },
            {
              floorBreak: [
                '4~3',
                'd+1',
                'ff+1+2, 1+2'

              ]
            }
          ]
        },
        {
          name: 'Zafina',
          tier: 'A-Tier',
          types: [
            ['Stance',
              'purple', 'darken-3'],
            ['Movement-Heavy',
              'pink', 'darken-3']
          ],
          color: 'indigo darken-4',
          rage: [
            {
              name: 'Rage Art',
              command: 'df+3+4'
            },
            {
              name: 'Rage Drive',
              command: 'f+2+3'
            }
          ],
          comboEnders: [

            {
              wallCarry: [
                'ff+3+4',
                'df+3, 4',
                'df+1, 4'
              ]
            },
            {
              wallBreak: [
                'f+1+2',
                'df+1, 2, 1',
                'f+2, 3, 4'
              ]
            },
            {
              floorBreak: [
                'b+3',
                'df+4, 1',
                'd+2'

              ]
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
    },
    characterRage () {
      const x = this.characters
      const y = this.value
      const current = _.findIndex(x, function (o) { return o.name == y })
      const z = x[current]
      // => 0
      return z
    },
    characterColor () {
      const x = this.characters
      const y = this.value
      const current = _.findIndex(x, function (o) { return o.name == y })
      const z = x[current].color
      // => 0
      return z
    }
  }
}
