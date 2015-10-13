'use strict';
module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('media', JSON.stringify());
  },
  getCommentCollection: function () {
    return [
      {
          "id": "561c1415aad5d1645fed8171",
          "statuses": {
              "created": 1444680725923,
              "updated": 1444680725923
          },
          "message": "Cool!",
          "owner": {
              "username": "mikeh2042",
              "avatar": null,
              "id": "55651ba623192285717c428b"
          }
      },
      {
          "id": "561c1434aad5d1645fed8172",
          "statuses": {
              "created": 1444680756332,
              "updated": 1444680756332
          },
          "mediaId": "xyJaQxkGg1",
          "message": "asdf",
          "owner": {
              "username": "mikeh2042",
              "avatar": null,
              "id": "55651ba623192285717c428b"
          }
      }
    ]
  },
  getData: function () {
    return {
        "type": "image",
        "caption": "",
        "tags": [],
        "creator": {
            "id": "542f3b2386c2588509f1bbae",
            "username": "slipknotofficial",
            "avatar": {
                "small": "https://vixlet-prod.imgix.net/9d00ffaadbd4e12e4110b42e45dc4bbc-1414033185.png?fit=max&w=128&h=128&fm=jpg"
            },
            "statuses": {
                "brand": 1433292035203,
                "official": 1433292035203,
                "created": 1440442342713,
                "updated": 1440442342714
            }
        },
        "capsule": {
            "id": "55afe7eff0281bed277d21cc",
            "cover": {
                "original": "https://vixletmedia.imgix.net/static/capsulecovers/6/user/slk_skeleton.png"
            },
            "name": "slipknot",
            "capsuleLevel": 4,
            "statuses": {
                "created": 1437591535705,
                "updated": 1437591535705,
                "unlocked": 1425422915357
            }
        },
        "image": {
            "original": "https://vixletmedia.imgix.net/6/images/542f3b2386c2588509f1bbae/45771a936c8146ac94984a818155f1c7/og.jpg",
            "large": "https://vixletmedia.imgix.net/6/images/542f3b2386c2588509f1bbae/45771a936c8146ac94984a818155f1c7/og.jpg?fit=max&w=640&h=640&fmt=jpg"
        },
        "statuses": {
            "created": 1443824665220
        },
        "id": "xyJaQxkGg1",
        "counts": {
            "likes": 0,
            "shares": 19163,
            "comments": 2
        }
    };
  }

};
