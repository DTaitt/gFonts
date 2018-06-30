from favorites.models import Favorite
from rest_framework import viewsets
from favorites.serializers import FavoriteSerializer

# Create your views here.
class FavoriteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows favorites to be viewed or edited.
    """
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    lookup_field = 'hrefFamily'
    