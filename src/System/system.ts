import { pseudoSelectors } from '../Style-System/pseudos';
import { MapOfSystemConfig } from '../Style-System/styleSystem';

export const systemProps = { ...MapOfSystemConfig, ...pseudoSelectors };

export const isStyleProp = (p: any) => p in systemProps;
