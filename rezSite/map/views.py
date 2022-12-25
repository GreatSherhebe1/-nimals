from django.shortcuts import render


def show_map(request):
    if request.user.is_authenticated:
        context = {'email': request.user.username,'statusLabel':'Выйти из аккаунта'}
    else:
        context = {'email': '','statusLabel':'войти в аккаунт'}
    return render(request, 'map.html',context)
