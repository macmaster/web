#!/usr/bin/python
from flask import Flask, jsonify
from functional import seq
from os import listdir, path

app = Flask(__name__)
site_dir = "site"
videos_dir = "videos"

def video_json(video):
  return {
  }

def video_isfile(video):
  return path.isfile(
    path.join(site_dir, videos_dir, video)
  )

@app.route("/videos")
def index():
  videos = listdir(path.join(site_dir, videos_dir))
  videos = seq(videos).filter(
    lambda video:
      path.isfile(path.join(site_dir, videos_dir, video))
  ).map(
    lambda video: {
      "name": path.splitext(video)[0],
      "video": path.join(videos_dir, video)
    }
  )

  return jsonify({ 
    "location": videos_dir,
    "videos": list(videos),
  });

if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=True)
