from django.shortcuts import render


def manual(request):
    if request.user.is_authenticated:
        context = {'email': request.user.username,'statusLabel':'Выйти из аккаунта'}
    else:
        context = {'email': '','statusLabel':'войти в аккаунт'}
    return render(request, 'manual.html',context)


def to_map(request):
    return render(request, 'map/templates/map.html')
