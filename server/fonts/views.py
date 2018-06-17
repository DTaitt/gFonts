# from django.shortcuts import render
# from googleapiclient import webfonts
# Create your views here.

from django.shortcuts import render
from django.conf import settings
import requests

from django.http import JsonResponse

def index(request):
    res = requests.get('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=%s' % (settings.GOOGLE_FONTS_API_KEY))
    fonts = res.json()
    return JsonResponse(fonts)