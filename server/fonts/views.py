# from django.shortcuts import render
# from googleapiclient import webfonts
# Create your views here.

from django.shortcuts import render
import requests

from django.http import JsonResponse

def index(request):
    res = requests.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4')
    fonts = res.json()
    return JsonResponse(fonts)