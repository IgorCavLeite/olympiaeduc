import { type ViewProps } from 'react-native';
export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};
export declare function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps): any;
//# sourceMappingURL=ThemedView.d.ts.map