from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    stock = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']   # products always show in same order