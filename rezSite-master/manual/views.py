from django.shortcuts import render


def manual(request):
    return render(request, 'manual.html')


def to_map(request):
    return render(request, 'map/templates/map.html')
