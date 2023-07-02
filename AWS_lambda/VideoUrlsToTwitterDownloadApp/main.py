import json

def lambda_handler(event, context):
    # TODO implement
    response = {
        "statusCode": 200,
        "body": {
            "No1.Url": "https://video.twimg.com/amplify_video/1675042116857131008/vid/720x1280/fuJ7ygMObGTFSV99.mp4?tag=14",
            "No2.Url": "https://video.twimg.com/ext_tw_video/1675331572084637696/pu/vid/720x1280/dmy73ujdeYtYk6s7.mp4?tag=12",
            "No3.Url": "https://video.twimg.com/amplify_video/1675092250768883715/vid/720x720/Ktv49swlRHhQxm7L.mp4?tag=14"
        }
    }
    return {
        'statusCode': 200,
        'body': json.dumps(response["body"])
    }