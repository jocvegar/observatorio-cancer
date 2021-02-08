import * as animationData from "@/assets/medical.json";

export default {
  data: function() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
      anim: null,
      animationSpeed: 1.1,
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      anim.setSpeed(this.animationSpeed);
    },
  },
};
