# Generated by Django 4.1.3 on 2022-12-24 15:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MapRoute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Point',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x', models.FloatField()),
                ('y', models.FloatField()),
                ('is_street_cross', models.BooleanField()),
                ('name', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('description', models.CharField(blank=True, default=None, max_length=250, null=True)),
                ('picture', models.ImageField(blank=True, default=None, null=True, upload_to='static/pictures/')),
                ('routeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='map.maproute')),
            ],
        ),
    ]
