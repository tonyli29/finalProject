# Generated by Django 2.1.5 on 2019-04-17 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0004_auto_20190417_0811'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='houseimages',
            name='image',
        ),
        migrations.AddField(
            model_name='houseimages',
            name='images',
            field=models.CharField(default='no image', max_length=300),
        ),
    ]
