import { NextRequest, NextResponse } from 'next/server';

import a333 from '../../../../scrambles/333.json';
import a222 from '../../../../scrambles/222.json';
import a444 from '../../../../scrambles/444.json';
import a555 from '../../../../scrambles/555.json';
import a666 from '../../../../scrambles/666.json';
import a777 from '../../../../scrambles/777.json';
import a333bf from '../../../../scrambles/333bf.json';
import a555bf from '../../../../scrambles/555bf.json';
import a333oh from '../../../../scrambles/333oh.json';
import aSq1 from '../../../../scrambles/sq1.json';
import aMinx from '../../../../scrambles/minx.json';
import aPyram from '../../../../scrambles/pyram.json';
import aClock from '../../../../scrambles/clock.json';
import aSkewb from '../../../../scrambles/skewb.json';

const TAKE = 500;

const cubeTypes = [
    '333',
    '222',
    '444',
    '555',
    '666',
    '777',
    'clock',
    'pyram',
    'sq1',
    'skewb',
    'minx',
    '333oh',
    '333bf',
    '444bf',
    '555bf',
];

type PossibleCubes =
    | '333'
    | '222'
    | '444'
    | '555'
    | '666'
    | '777'
    | 'clock'
    | 'pyram'
    | 'sq1'
    | 'skewb'
    | 'minx'
    | '333oh'
    | '333bf'
    | '444bf'
    | '555bf';

const scramblesMap: Record<PossibleCubes, string[]> = {
    '333': a333 as string[],
    '222': a222 as string[],
    '444': a444 as string[],
    '555': a555 as string[],
    '666': a666 as string[],
    '777': a777 as string[],
    clock: aClock as string[],
    pyram: aPyram as string[],
    sq1: aSq1 as string[],
    minx: aMinx as string[],
    '333oh': a333oh as string[],
    '333bf': a333bf as string[],
    // TODO: change to '444bf' scrambles
    '444bf': a444 as string[],
    '555bf': a555bf as string[],
    skewb: aSkewb as string[],
};

const handler = async (req: NextRequest) => {
    const apiKey = req.headers.get('api-key');
    if (apiKey !== process.env.NEXT_PRIVATE_API_KEY) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url || '');
    const cube = searchParams.get('cube');
    const skip = Number(searchParams.get('skip'));

    if (typeof skip !== 'number' || skip < 0 || isNaN(skip) || searchParams.get('skip') === null) {
        return NextResponse.json({ message: 'Skip value is invalid or missing' }, { status: 400 });
    }

    if (!cubeTypes.includes(cube || '') || searchParams.get('cube') === null) {
        return NextResponse.json({ message: 'Cube value is invalid or missing' }, { status: 400 });
    }

    const scramblesForUser = scramblesMap[cube as PossibleCubes].slice(skip, skip + TAKE);

    return NextResponse.json(
        { scrambles: scramblesForUser, count: scramblesForUser.length, newIndex: skip + TAKE },
        { status: 200 }
    );
};

export const GET = handler;
