"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes"
import { cn } from '@/lib/utils';

type HexagonsProps = React.ComponentProps<"div"> & {
  children?: React.ReactNode;
  hexagonProps?: React.ComponentProps<"div">;
  hexagonSize?: number; // value greater than 50
  hexagonMargin?: number;
};

function Hexagons({
  className,
  children,
  hexagonProps,
  hexagonSize = 75,
  hexagonMargin = 3,
  ...props
}: HexagonsProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.8;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const [gridDimensions, setGridDimensions] = useState({
    rows: 0,
    columns: 0,
  });

  const updateGridDimensions = useCallback(() => {
    const rows = Math.ceil(window.innerHeight / rowSpacing);
    const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, hexagonWidth]);

  useEffect(() => {
    updateGridDimensions();
    window.addEventListener("resize", updateGridDimensions);
    return () => window.removeEventListener("resize", updateGridDimensions);
  }, [updateGridDimensions]);

  return (
    <div
      data-slot="hexagon-background"
      className={cn(
        "relative size-full overflow-hidden dark:bg-neutral-900 bg-neutral-100",
        className
      )}
      {...props}
    >
      <style>{`:root { --hexagon-margin: ${hexagonMargin}px; }`}</style>
      <div className="absolute top-0 -left-0 size-full overflow-hidden">
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - 10,
            }}
            className="inline-flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => (
                <div
                  key={`hexagon-${rowIndex}-${colIndex}`}
                  {...hexagonProps}
                  style={{
                    width: hexagonWidth,
                    height: hexagonHeight,
                    marginLeft: hexagonMargin,
                    ...hexagonProps?.style,
                  }}
                  className={cn(
                    "relative",
                    "[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full dark:before:bg-neutral-950 before:bg-white before:opacity-100 before:transition-all before:duration-1000",
                    "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] dark:after:bg-neutral-950 after:bg-white",
                    "after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]",
                    "hover:before:bg-pink-200 dark:hover:before:bg-pink-800 hover:before:opacity-100 hover:before:duration-0 dark:hover:after:bg-pink-300 hover:after:bg-pink-300 hover:after:opacity-100 hover:after:duration-0",
                    hexagonProps?.className
                  )}
                />
              )
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export function HexagonBackground({ className }: HexagonsProps) {
  return (
    <Hexagons
      className={cn(
        "absolute inset-0 flex items-center justify-center", 
        "-z-10",        
        className
      )}
    />
  );
}
  