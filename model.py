# coding: utf-8
from sqlalchemy import BigInteger, Boolean, CheckConstraint, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.schema import FetchedValue
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_migrate import Migrate
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class SequelizeMeta(db.Model):
    __tablename__ = 'SequelizeMeta'

    name = db.Column(db.String(255), primary_key=True)


class TodoItem(db.Model):
    __tablename__ = 'TodoItems'

    id = db.Column(db.Integer, primary_key=True,
                   server_default=db.FetchedValue())
    content = db.Column(db.String(255), nullable=False)
    complete = db.Column(db.Boolean, server_default=db.FetchedValue())
    createdAt = db.Column(db.DateTime(True), nullable=False)
    updatedAt = db.Column(db.DateTime(True), nullable=False)
    todoId = db.Column(db.ForeignKey('todos.id', ondelete='CASCADE'))

    todo = db.relationship(
        'Todo', primaryjoin='TodoItem.todoId == Todo.id', backref='todo_items')


class Inventory(db.Model):
    __tablename__ = 'inventory'

    inventory_id = db.Column(db.Integer, primary_key=True)
    shelter_id = db.Column(db.ForeignKey(
        'shelters.shelter_id'), nullable=False)
    item_id = db.Column(db.ForeignKey('item.item_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    item = db.relationship(
        'Item', primaryjoin='Inventory.item_id == Item.item_id', backref='inventories')
    shelter = db.relationship(
        'Shelter', primaryjoin='Inventory.shelter_id == Shelter.shelter_id', backref='inventories')


class Item(db.Model):
    __tablename__ = 'item'

    item_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)


class Clinton(Item):
    __tablename__ = 'clinton'

    item_id = db.Column(db.ForeignKey('item.item_id'), primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)


class Shelter(db.Model):
    __tablename__ = 'shelters'
    __table_args__ = (
        db.CheckConstraint('current_occupants <= total_capacity'),
        db.CheckConstraint('current_occupants > 0'),
        db.CheckConstraint('total_capacity > 0')
    )

    shelter_id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(60), nullable=False)
    name = db.Column(db.String(60), nullable=False)
    accessible = db.Column(db.String(1), nullable=False)
    current_occupants = db.Column(db.Integer, nullable=False)
    total_capacity = db.Column(db.Integer, nullable=False)


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True,
                   server_default=db.FetchedValue())
    title = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime(True), nullable=False)
    updatedAt = db.Column(db.DateTime(True), nullable=False)


class User(db.Model):
    __tablename__ = 'user2'

    user_id = Column(BigInteger, primary_key=True,
                     server_default=FetchedValue())
    first_name = db.Column(db.String(60), nullable=False)
    last_name = db.Column(db.String(60), nullable=False)
    email = db.Column(db.String(80), nullable=False)
    family_size = db.Column(db.Integer, nullable=False)
    shelter_id = db.Column(db.ForeignKey(
        'shelters.shelter_id'), nullable=False)

    shelter = db.relationship(
        'Shelter', primaryjoin='User.shelter_id == Shelter.shelter_id', backref='users')

    @classmethod
    def create(cls, **kwargs):
        """Create a new record and save it the database."""
        instance = cls(**kwargs)
        return instance.save()

    def save(self, commit=True):
        """Save the record."""
        db.session.add(self)
        if commit:
            db.session.commit()
        return self

    def delete(self, commit=True):
        """Remove the record from the database."""
        db.session.delete(self)
        return commit and db.session.commit()
