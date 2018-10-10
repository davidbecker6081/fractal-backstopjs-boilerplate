report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\backstop_default_Fractal_Example_0_document_0_phone.png",
        "test": "..\\bitmaps_test\\20181010-095028\\backstop_default_Fractal_Example_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Fractal_Example_0_document_0_phone.png",
        "label": "Fractal Example",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/components/detail/atomexample",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.31",
          "analysisTime": 13
        },
        "diffImage": "..\\bitmaps_test\\20181010-095028\\failed_diff_backstop_default_Fractal_Example_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});