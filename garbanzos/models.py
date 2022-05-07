from djongo.models import Model
from djongo.models import *
from djongo.models import fields
from bson import ObjectId


class Image(Model):
    _id = fields.ObjectIdField(primary_key=True)
    hash = CharField(max_length=32)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        _id = ObjectId()


class Address(Model):
    path = CharField(max_length=150)
    _id = fields.ObjectIdField(primary_key=True)


class Bill(Model):
    _id = fields.ObjectIdField(primary_key=True)
    count = IntegerField()


class Users(Model):
    _id = fields.ObjectIdField(primary_key=True)
    name = CharField(max_length=20)
    lastname = CharField(max_length=20)
    shadow = CharField(max_length=20)
    birthdate = DateField()

    bills = ArrayField(
        model_container=Bill
    )
    address = ArrayField(
        model_container=Address
    )


class Products(Model):
    # id = fields.ObjectIdField(primary_key=True)
    name = CharField(max_length=30)
    price = FloatField()
    preview = FileField()

    stock = IntegerField()
    category = fields.ObjectIdField(primary_key=True)


class Category(Model):
    _id = fields.ObjectIdField(primary_key=True)
    title = CharField(max_length=100)
    image = ImageField(upload_to="upload")

    def __str__(self):
        return self.title
