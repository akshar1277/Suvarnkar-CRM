# Generated by Django 5.0.4 on 2024-05-21 09:07

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0002_customerdetail_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(max_length=50)),
                ('content', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='anniversary_date',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='birthday_date',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='city',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='customer_type',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='email',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='lead_assigned_to',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='lead_type',
        ),
        migrations.RemoveField(
            model_name='customerdetail',
            name='state',
        ),
        migrations.AlterField(
            model_name='customerdetail',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.CreateModel(
            name='MessageHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crm.company')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crm.customerdetail')),
                ('template', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='crm.template')),
            ],
        ),
    ]
