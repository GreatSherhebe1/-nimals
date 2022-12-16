import re
from email.utils import parseaddr
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def sign_in(request):
    if request.method == "POST":
        email = request.POST['email']
        if email == '':
            messages.info(request, 'Неправильный имэйл или пароль')
            return render(request, 'signIn.html')
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('map')
        else:
            messages.info(request, 'Неправильный имэйл или пароль')
            return render(request, 'signIn.html')
    else:
        return render(request, 'signIn.html')


def checkEmail(email):
    regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    if (re.fullmatch(regex, email)):
        return True
    else:
        return False

@csrf_exempt
def sign_up(request):
    if request.method =="POST":
        name = request.POST['name']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 == password2 and len(password1) >=8 and checkEmail(email) and name !='':
            user = User.objects.create_user(name,email= email,password=password1)
            return redirect('signIn')
        else:
            return render(request, 'signUp.html')
    return render(request, 'signUp.html')

@login_required(login_url='signIn')
def logOutUser(request):
    logout(request)
    return redirect(request,'signIn')

@login_required(login_url='signIn')
def authcheck(request):
    return HttpResponse('Вы авторизованы')

