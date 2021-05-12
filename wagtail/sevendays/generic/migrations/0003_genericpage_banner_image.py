# Generated by Django 3.1.10 on 2021-05-07 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0023_add_choose_permissions'),
        ('generic', '0002_auto_20210507_1805'),
    ]

    operations = [
        migrations.AddField(
            model_name='genericpage',
            name='banner_image',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image'),
        ),
    ]