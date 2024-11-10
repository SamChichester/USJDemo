from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Member
from .serializers import MemberSerializer

class MembersListAPIView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
