report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Fractal_Example_0_test_0_desktop.png",
        "test": "..\\bitmaps_test\\20181011-153040\\backstop_default_Fractal_Example_0_test_0_desktop.png",
        "selector": ".test",
        "fileName": "backstop_default_Fractal_Example_0_test_0_desktop.png",
        "label": "Fractal Example",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/components/detail/atomexample",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Selectors_0_SDkEP_0_desktop.png",
        "test": "..\\bitmaps_test\\20181011-153040\\backstop_default_Selectors_0_SDkEP_0_desktop.png",
        "selector": ".SDkEP",
        "fileName": "backstop_default_Selectors_0_SDkEP_0_desktop.png",
        "label": "Selectors",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://www.google.com",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});