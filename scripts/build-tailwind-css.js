import { spawnSync } from 'node:child_process';
import path from 'node:path';

const projectRoot = process.cwd();
const input = path.join(projectRoot, 'src', 'app', 'globals.css');
const output = path.join(projectRoot, 'src', 'app', 'globals.generated.css');

const result = spawnSync(
    'tailwindcss',
    ['-i', input, '-o', output, '--config', 'tailwind.config.ts'],
    {
        stdio: 'inherit',
    },
);

if (result.status !== 0) {
    process.exit(result.status ?? 1);
}
