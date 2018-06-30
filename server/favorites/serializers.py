from rest_framework import serializers
from favorites.models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ('id', 'family', 'category', 'url')
        lookup_field = 'family'