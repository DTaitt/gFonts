from django.db import models

# Create your models here.
class Favorite(models.Model):
    family = models.CharField(max_length = 100)
    hrefFamily = models.CharField(max_length = 100, default = 'font-family')
    category = models.CharField(max_length = 100)
    url = models.CharField(max_length = 100)