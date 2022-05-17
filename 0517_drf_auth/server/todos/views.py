from django.shortcuts import get_list_or_404, get_object_or_404
from django.db.models import Count
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import Todo
from .serializers import TodoSerializer
# Create your views here.
@api_view(['GET'])
def todo_list_create(request):
    # DB 검색해서 시리얼라이징하고...반환
    if request.method == 'GET':
        # 전체 목록 가져오는거...
        # todos = get_list_or_404(Todo)
        # serializer = TodoSerializer(todos,many=True)
        # 내가 등록한 todo만 들고 오기 : 나? 현재 인증된 사용자
        todos = request.user.todos
        serializer = TodoSerializer(todos,many=True)
        return Response(serializer.data)