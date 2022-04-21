from djongo.models import Model
from djongo.models import *
from djongo.models import fields


class Bill(Model):
    class Meta:
        abstract = True


class Users(Model):
    _id = fields.ObjectId()
    name = CharField(max_length=20)
    lastname = CharField(max_length=20)
    shadow = CharField(max_length=20)
    birthdate = DateField()

    bills = ArrayField(
        model_container=Bill
    )
    address = ArrayField(
        model_container=Bill
    )


class Products(Model):
    _id = fields.ObjectId()
    name = CharField(max_length=30)
    price = FloatField()
    preview = FileField()

    stock = IntegerField()
    category = fields.ObjectId()
