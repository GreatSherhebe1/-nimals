from django.http import HttpResponse
from django.shortcuts import render


def cabinet(request):
    return render(request, 'cabinet.html')