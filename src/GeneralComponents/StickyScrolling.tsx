import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const StickyScrolling = (
    firstRef: React.RefObject<HTMLDivElement>,
    secondRef: React.RefObject<HTMLDivElement>,
) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useEffect(() => {
        const scrolling = {
            enabled: true,
            events: 'scroll,wheel,touchmove,pointermove'.split(','),
            prevent: (e: Event) => e.preventDefault(),
            disable() {
                if (scrolling.enabled) {
                    scrolling.enabled = false;
                    window.addEventListener('scroll', gsap.ticker.tick, { passive: true });
                    scrolling.events.forEach((e, i) =>
                        (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false }),
                    );
                }
            },
            enable() {
                if (!scrolling.enabled) {
                    scrolling.enabled = true;
                    window.removeEventListener('scroll', gsap.ticker.tick);
                    scrolling.events.forEach((e, i) =>
                        (i ? document : window).removeEventListener(e, scrolling.prevent),
                    );
                }
            },
        };
        function goToSection(section: HTMLDivElement | null) {
            if (scrolling.enabled) {
                if (section != null) {
                    scrolling.disable();
                    gsap.to(window, {
                        scrollTo: { y: section, autoKill: false },
                        onComplete: scrolling.enable,
                        duration: 1,
                    });
                }
            }
        }
        if (firstRef.current != null && secondRef.current != null) {
            ScrollTrigger.create({
                trigger: firstRef.current,
                start: 'top top',
                end: 'bottom top+=1',
                onEnter: () => goToSection(secondRef.current),
                onEnterBack: () => goToSection(firstRef.current),
            });
        }
    }, [firstRef, secondRef]);
};
