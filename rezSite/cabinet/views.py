from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required(login_url='signIn')
def cabinet(request):
    context = {'email': request.user.username, 'statusLabel':'Выйти из аккаунта'}
    return render(request, 'cabinet.html',context)