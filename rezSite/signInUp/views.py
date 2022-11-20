from django.shortcuts import render


def sign_in(request):
    return render(request, 'templates/signIn.html')


def sign_up(request):
    return render(request, 'templates/signUp.html')
