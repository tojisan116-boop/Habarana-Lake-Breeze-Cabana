-- =====================================================
-- HABARANA LAKE BREEZE CABANA
-- ROOM AVAILABILITY DATABASE
-- =====================================================


create table if not exists public.room_types (

    id bigint generated always as identity primary key,

    room_name text not null unique,

    description text,

    total_rooms integer not null default 0
        check (total_rooms >= 0),

    active boolean not null default true,

    created_at timestamptz
        not null default now()

);



create table if not exists public.room_inventory (

    id bigint generated always as identity primary key,

    room_type_id bigint
        references public.room_types(id)
        on delete cascade,

    inventory_date date not null,

    available_rooms integer not null default 0
        check (available_rooms >= 0),

    created_at timestamptz
        not null default now(),

    updated_at timestamptz
        not null default now(),

    unique(room_type_id, inventory_date)

);



-- =====================================================
-- ROOM TYPES
-- =====================================================

insert into public.room_types
(room_name, description, total_rooms)

values

(
    'Double Room',
    'Double room with private bathroom and garden view.',
    1
),

(
    'Double Room with Lake View',
    'Double room with lake view and private bathroom.',
    1
),

(
    'Family Room',
    'Family room with two double beds and private bathroom.',
    1
)

on conflict (room_name)
do nothing;



-- =====================================================
-- SECURITY
-- =====================================================

alter table public.room_types
enable row level security;

alter table public.room_inventory
enable row level security;



-- Visitors can read active room types.

create policy
"Public can view active room types"

on public.room_types

for select

using (
    active = true
);



-- Visitors can read availability.

create policy
"Public can view room availability"

on public.room_inventory

for select

using (true);



-- =====================================================
-- AVAILABILITY FUNCTION
-- =====================================================

create or replace function
public.get_room_availability(
    requested_checkin date,
    requested_checkout date
)

returns table (

    room_id bigint,
    room_name text,
    available_rooms integer

)

language sql

security definer

set search_path = public

as $$

    select

        r.id,

        r.room_name,

        coalesce(
            min(i.available_rooms),
            0
        ) as available_rooms

    from room_types r

    left join room_inventory i

        on i.room_type_id = r.id

        and i.inventory_date >= requested_checkin

        and i.inventory_date < requested_checkout

    where r.active = true

    group by
        r.id,
        r.room_name

    order by
        r.id;

$$;



-- =====================================================
-- PREVENT RANDOM USERS FROM EXECUTING OTHER FUNCTIONS
-- =====================================================

revoke all
on function public.get_room_availability(date,date)
from public;


grant execute
on function public.get_room_availability(date,date)
to anon;


grant execute
on function public.get_room_availability(date,date)
to authenticated;
