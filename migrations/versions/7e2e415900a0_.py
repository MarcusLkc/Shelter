"""empty message

Revision ID: 7e2e415900a0
Revises: 
Create Date: 2018-05-09 00:44:47.940364

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '7e2e415900a0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('inventory1')
    op.drop_table('todos')
    op.drop_table('inventory')
    op.drop_table('TodoItems')
    op.drop_table('user2')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user2',
    sa.Column('user_id', sa.BIGINT(), nullable=False),
    sa.Column('first_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('last_name', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('email', sa.VARCHAR(length=90), autoincrement=False, nullable=False),
    sa.Column('family_size', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('shelter_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('user_id', name='user2_pkey')
    )
    op.create_table('TodoItems',
    sa.Column('id', sa.INTEGER(), server_default=sa.text('nextval(\'"TodoItems_id_seq"\'::regclass)'), nullable=False),
    sa.Column('content', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.Column('complete', sa.BOOLEAN(), server_default=sa.text('false'), autoincrement=False, nullable=True),
    sa.Column('createdAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.Column('updatedAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.Column('todoId', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['todoId'], ['todos.id'], name='TodoItems_todoId_fkey', ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id', name='TodoItems_pkey')
    )
    op.create_table('inventory',
    sa.Column('item_id', sa.INTEGER(), server_default=sa.text('0'), autoincrement=False, nullable=False),
    sa.Column('shelter_id', sa.INTEGER(), server_default=sa.text('0'), autoincrement=False, nullable=False),
    sa.Column('quantity', sa.INTEGER(), server_default=sa.text('0'), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['item_id'], ['item.item_id'], name='inventory_item_id_fkey'),
    sa.ForeignKeyConstraint(['shelter_id'], ['shelters.shelter_id'], name='inventory_shelter_id_fkey'),
    sa.PrimaryKeyConstraint('item_id', name='inventory_pkey')
    )
    op.create_table('todos',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('title', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.Column('createdAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.Column('updatedAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='todos_pkey')
    )
    op.create_table('inventory1',
    sa.Column('shelter_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('quantity', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('item_id', sa.INTEGER(), server_default=sa.text('0'), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['shelter_id'], ['shelters.shelter_id'], name='inventory_shelter_id_fkey')
    )
    # ### end Alembic commands ###
