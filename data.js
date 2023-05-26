var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-",
      "name": "Entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -3.0465774798722087,
        "pitch": -0.012967998083180277,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6684465580677976,
          "pitch": 0.15957815185324442,
          "rotation": 0,
          "target": "1-rear"
        },
        {
          "yaw": -3.1335044677412043,
          "pitch": -0.1727162995705882,
          "rotation": 0,
          "target": "3-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rear",
      "name": "Rear",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0.06979459299541091,
        "pitch": -0.025257857830961683,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5643869609903813,
          "pitch": 0.03615429516415247,
          "rotation": 0,
          "target": "2-garden"
        },
        {
          "yaw": 1.4345335813151063,
          "pitch": 0.19866239359377502,
          "rotation": 0,
          "target": "0-entrance-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garden",
      "name": "Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -1.251723645775158,
        "pitch": 0.15448659349740268,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1163126304549724,
          "pitch": 0.06530400523808666,
          "rotation": 0,
          "target": "1-rear"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.8883559035920925,
        "pitch": 0.051587357883974505,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4468855883613942,
          "pitch": -0.017227653270591503,
          "rotation": 0,
          "target": "0-entrance-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1143968926103076,
          "pitch": 0.4509822136680608,
          "title": "Welcome",
          "text": "Hello"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
