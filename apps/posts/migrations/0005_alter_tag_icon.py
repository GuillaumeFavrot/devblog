# Generated by Django 4.2.4 on 2023-09-18 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_tag_text_color_alter_tag_background_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='icon',
            field=models.ImageField(blank=True, upload_to='frontend/public/images/tags/'),
        ),
    ]
