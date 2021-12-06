# Generated by Django 3.2.9 on 2021-12-06 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=100)),
                ('price', models.IntegerField()),
                ('size', models.CharField(choices=[('XS', 'extra-small'), ('S', 'small'), ('M', 'medium'), ('L', 'large'), ('XL', 'extra-large')], default=None, max_length=10)),
                ('stock', models.IntegerField()),
                ('category', models.CharField(choices=[('T-Shirts', 'T-Shirts'), ('Jeans', 'Jeans'), ('Dresses', 'Dresses'), ('Jumpers', 'Jumpers'), ('Shorts', 'Shorts'), ('Shirts', 'Shirts'), ('Trousers', 'Trousers'), ('Socks', 'Socks')], default=None, max_length=50)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], default=None, max_length=50)),
                ('colour', models.CharField(choices=[('Black', 'Black'), ('Yellow', 'Yellow'), ('Blue', 'Blue'), ('Red', 'Red'), ('Green', 'Green'), ('Orange', 'Orange'), ('White', 'White'), ('Purple', 'Purple'), ('Brown', 'Brown'), ('Grey', 'Grey'), ('Beige', 'Beige'), ('Pink', 'Pink')], default=None, max_length=50)),
            ],
        ),
    ]
