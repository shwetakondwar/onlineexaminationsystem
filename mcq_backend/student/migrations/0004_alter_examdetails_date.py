# Generated by Django 3.2.9 on 2021-12-13 08:56

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0003_auto_20211212_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='examdetails',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
