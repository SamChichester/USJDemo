from django.urls import path
from .views import MembersListAPIView

urlpatterns = [
    path('members/', MembersListAPIView.as_view(), name='members-list'),
]