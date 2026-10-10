import { Project } from '../../project';
import { Translate } from '../translate';
import { testPlatform } from './test-platform';
import { wildlifeMonitoring } from './wildlife-monitoring';
import { rosbot } from './rosbot';

// PROJECTS, in display order. Add a project = a new file + one line here.
export function projectsContent(t: Translate): readonly Project[] {
  return [testPlatform(t), wildlifeMonitoring(t), rosbot(t)];
}
