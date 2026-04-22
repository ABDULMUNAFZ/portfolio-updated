/* eslint-disable react/no-unknown-property */
// @ts-nocheck
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

extend({ MeshLineGeometry, MeshLineMaterial });

type EducationLanyardProps = {
  className?: string;
  frontImage?: string;
  backImage?: string;
};

export default function EducationLanyard({
  className = "",
  frontImage,
  backImage,
}: EducationLanyardProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative z-0 h-[100dvh] min-h-[100dvh] w-full overflow-visible border-0 bg-transparent shadow-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, isMobile ? 24 : 22], fov: isMobile ? 27 : 23 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <ambientLight intensity={Math.PI * 0.8} />
        <Physics gravity={[0, -40, 0]} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
          />
        </Physics>
        <Environment blur={0.65}>
          <Lightformer
            intensity={2.2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function createLabelTexture(title: string, subtitle: string, tone: string) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const gradient = ctx.createLinearGradient(0, 0, 1024, 640);
  if (tone === "front") {
    gradient.addColorStop(0, "#2a1678");
    gradient.addColorStop(1, "#5a33f9");
  } else {
    gradient.addColorStop(0, "#5a33f9");
    gradient.addColorStop(1, "#f68ed4");
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 0.22;
  for (let i = 0; i < 12; i += 1) {
    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? "#ffffff" : "#120736";
    ctx.arc(80 + i * 85, 80 + (i % 3) * 110, 42 + (i % 4) * 7, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 78px sans-serif";
  ctx.fillText(title, 64, 172);

  ctx.fillStyle = "#f5eafe";
  ctx.font = "500 34px sans-serif";
  ctx.fillText(subtitle, 64, 230);

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillRect(64, 288, 270, 270);

  ctx.fillStyle = tone === "front" ? "#5a33f9" : "#7d2cbf";
  ctx.font = "700 44px sans-serif";
  ctx.fillText("AM", 155, 440);

  ctx.fillStyle = "#e6d8ff";
  ctx.font = "500 24px sans-serif";
  ctx.fillText("Portfolio ID", 64, 606);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createBandTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 180;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bg.addColorStop(0, "#3e58c8");
  bg.addColorStop(0.5, "#4767e8");
  bg.addColorStop(1, "#3a53bd");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.fillRect(0, 20, canvas.width, 3);
  ctx.fillRect(0, canvas.height - 23, canvas.width, 3);

  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  for (let x = -220; x < canvas.width + 220; x += 130) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + 110, canvas.height);
    ctx.stroke();
  }

  ctx.font = "500 56px Arial, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const centerY = canvas.height / 2;
  ctx.fillText("AMZ", canvas.width * 0.60, centerY);
  ctx.fillText("AMZ", canvas.width * 0.75, centerY);
  ctx.fillText("AMZ", canvas.width * 0.85, centerY);

  // Integrated steel crimp-cover styling at the tie end near the card.
  // Height spans the full strap so it matches tie width.
  const crimpW = 110;
  const crimpH = canvas.height + 10;
  const crimpX = canvas.width * 0.91 - crimpW / 2;
  const crimpY = -5;
  const steel = ctx.createLinearGradient(crimpX, crimpY, crimpX, crimpY + crimpH);
  steel.addColorStop(0, "#6f7682");
  steel.addColorStop(0.22, "#c9d0d9");
  steel.addColorStop(0.5, "#8e97a3");
  steel.addColorStop(0.78, "#d6dde6");
  steel.addColorStop(1, "#6f7682");
  ctx.fillStyle = steel;
  ctx.fillRect(crimpX, crimpY, crimpW, crimpH);
  ctx.strokeStyle = "rgba(40,44,52,0.35)";
  ctx.lineWidth = 2;
  ctx.strokeRect(crimpX, crimpY, crimpW, crimpH);

  ctx.fillStyle = "rgba(23,27,35,0.2)";
  for (let x = 40; x < canvas.width; x += 110) {
    ctx.fillRect(x, 0, 2, canvas.height);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function useCardTextures(frontImage?: string, backImage?: string) {
  const [textures, setTextures] = useState(() => {
    const front = createLabelTexture("ABDUL MUNAF", "Front-End Developer", "front");
    const back = createLabelTexture("CONTACT", "abdul@example.com", "back");
    return { front, back };
  });

  useEffect(() => {
    const loader = new THREE.TextureLoader();

    const withSettings = (texture: THREE.Texture | null) => {
      if (!texture) return null;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
      return texture;
    };

    if (frontImage) {
      loader.load(
        frontImage,
        (tex) => {
          setTextures((prev) => ({ ...prev, front: withSettings(tex) }));
        },
        undefined,
        () => {},
      );
    }

    if (backImage) {
      loader.load(
        backImage,
        (tex) => {
          setTextures((prev) => ({ ...prev, back: withSettings(tex) }));
        },
        undefined,
        () => {},
      );
    }
  }, [frontImage, backImage]);

  return textures;
}

function Band({
  maxSpeed = 38,
  minSpeed = 4,
  isMobile = false,
  frontImage,
  backImage,
}) {
  const SLOT_Y = 1.24;
  const SLOT_Z = 0.02;
  const CARD_VISUAL_SCALE = 1.6;
  const CARD_VISUAL_OFFSET_Y = -1.2;
  const CARD_VISUAL_OFFSET_Z = -0.05;
  const JOINT_ANCHOR = [
    0,
    CARD_VISUAL_OFFSET_Y + SLOT_Y * CARD_VISUAL_SCALE,
    CARD_VISUAL_OFFSET_Z + SLOT_Z * CARD_VISUAL_SCALE,
  ] as const;

  const centerBand = useRef<any>();
  const fixed = useRef<any>();
  const j1 = useRef<any>();
  const j2 = useRef<any>();
  const j3 = useRef<any>();
  const card = useRef<any>();

  const vec = new THREE.Vector3();
  const hitPoint = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const cardWorld = new THREE.Vector3();
  const cardQuat = new THREE.Quaternion();
  const clipLocal = new THREE.Vector3(...JOINT_ANCHOR);
  const clipWorld = new THREE.Vector3();
  const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const segmentProps = {
    type: "dynamic",
    canSleep: false,
    colliders: false,
    angularDamping: 7,
    linearDamping: 6.5,
  };

  const { front, back } = useCardTextures(frontImage, backImage);
  const bandTexture = useMemo(() => createBandTexture(), []);

  const [centerCurve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, drag] = useState<any>(false);
  const [hovered, hover] = useState(false);

  const settleRig = () => {
    [card, j1, j2, j3].forEach((ref) => {
      if (!ref.current) return;
      ref.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
      ref.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
    });
  };

  const centerAnchor = useMemo(() => new THREE.Vector3(0.3, 6.7, 0.02), []);
  const joinPoint = useMemo(() => new THREE.Vector3(), []);
  const centerCtrlA = useMemo(() => new THREE.Vector3(), []);
  const centerCtrlB = useMemo(() => new THREE.Vector3(), []);

  const cardShape = useMemo(() => {
    const w = 2.02;
    const h = 2.86;
    const r = 0.18;

    const makeRoundedRectPath = (path: THREE.Shape | THREE.Path, rw: number, rh: number, rr: number) => {
      const hw = rw / 2;
      const hh = rh / 2;
      const cr = Math.min(rr, hw - 0.001, hh - 0.001);

      path.moveTo(-hw + cr, -hh);
      path.lineTo(hw - cr, -hh);
      path.absarc(hw - cr, -hh + cr, cr, -Math.PI / 2, 0, false);
      path.lineTo(hw, hh - cr);
      path.absarc(hw - cr, hh - cr, cr, 0, Math.PI / 2, false);
      path.lineTo(-hw + cr, hh);
      path.absarc(-hw + cr, hh - cr, cr, Math.PI / 2, Math.PI, false);
      path.lineTo(-hw, -hh + cr);
      path.absarc(-hw + cr, -hh + cr, cr, Math.PI, Math.PI * 1.5, false);
      path.closePath();
    };

    const shape = new THREE.Shape();
    makeRoundedRectPath(shape, w, h, r);

    // Rectangular punch slot near top-center of the card.
    const slotW = 0.3;
    const slotH = 0.09;
    const slotR = 0.025;
    const slotY = 1.24;
    const hole = new THREE.Path();
    hole.moveTo(-slotW / 2 + slotR, slotY - slotH / 2);
    hole.lineTo(slotW / 2 - slotR, slotY - slotH / 2);
    hole.absarc(slotW / 2 - slotR, slotY - slotH / 2 + slotR, slotR, -Math.PI / 2, 0, false);
    hole.lineTo(slotW / 2, slotY + slotH / 2 - slotR);
    hole.absarc(slotW / 2 - slotR, slotY + slotH / 2 - slotR, slotR, 0, Math.PI / 2, false);
    hole.lineTo(-slotW / 2 + slotR, slotY + slotH / 2);
    hole.absarc(-slotW / 2 + slotR, slotY + slotH / 2 - slotR, slotR, Math.PI / 2, Math.PI, false);
    hole.lineTo(-slotW / 2, slotY - slotH / 2 + slotR);
    hole.absarc(-slotW / 2 + slotR, slotY - slotH / 2 + slotR, slotR, Math.PI, Math.PI * 1.5, false);
    hole.closePath();
    shape.holes.push(hole);

    return shape;
  }, []);

  const cardExtrudeSettings = useMemo(
    () => ({
      depth: 0.04,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 20,
    }),
    [],
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], JOINT_ANCHOR]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
    return undefined;
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      if (state.raycaster?.ray?.intersectPlane(dragPlane, hitPoint)) {
        [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
        card.current?.setNextKinematicTranslation({
          x: THREE.MathUtils.clamp(hitPoint.x - dragged.x, -4, 4),
          y: THREE.MathUtils.clamp(hitPoint.y - dragged.y, -2.5, 7),
          z: hitPoint.z - dragged.z,
        });
      }
    }

    if (fixed.current && centerBand.current?.geometry) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      const cardPos = card.current.translation();
      const cardRot = card.current.rotation();
      cardQuat.set(cardRot.x, cardRot.y, cardRot.z, cardRot.w);
      cardWorld.set(cardPos.x, cardPos.y, cardPos.z);
      clipWorld.copy(clipLocal).applyQuaternion(cardQuat).add(cardWorld);

      // End exactly at the hole.
      joinPoint.copy(clipWorld);

      centerCtrlA
        .copy(centerAnchor)
        .lerp(joinPoint, 0.12)
        .add(new THREE.Vector3(0, -0.15, 0));
      centerCtrlB
        .copy(centerAnchor)
        .lerp(joinPoint, 0.42)
        .add(new THREE.Vector3(0, -0.42, 0));

      centerCurve.points[0].copy(centerAnchor);
      centerCurve.points[1].copy(centerCtrlA);
      centerCurve.points[2].copy(centerCtrlB);
      centerCurve.points[3].copy(joinPoint);

      centerBand.current.geometry.setPoints(centerCurve.getPoints(isMobile ? 20 : 36));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.52, z: ang.z });
    }
  });

  centerCurve.curveType = "catmullrom";
  centerCurve.tension = 0.3;

  return (
    <>
      <group position={[0.3, 5.3, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0, -0.7, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0, -1.4, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0, -2.05, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[0, -2.85, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[1.02, 1.45, 0.03]} />
          <group
            scale={CARD_VISUAL_SCALE}
            position={[0, CARD_VISUAL_OFFSET_Y, CARD_VISUAL_OFFSET_Z]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.stopPropagation();
              if (e.target?.hasPointerCapture?.(e.pointerId)) {
                e.target.releasePointerCapture(e.pointerId);
              }
              settleRig();
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.stopPropagation();
              e.target?.setPointerCapture?.(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
            onPointerMissed={() => {
              settleRig();
              drag(false);
            }}
          >
            <mesh castShadow receiveShadow>
              <extrudeGeometry args={[cardShape, cardExtrudeSettings]} />
              <meshPhysicalMaterial
                color="#fdfbff"
                roughness={0.7}
                metalness={0.05}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.2}
              />
            </mesh>

            <mesh position={[0, 0, 0.025]}>
              <shapeGeometry args={[cardShape]} />
              <meshStandardMaterial map={front || undefined} metalness={0.12} roughness={0.62} />
            </mesh>

            <mesh position={[0, 0, -0.025]} rotation={[0, Math.PI, 0]}>
              <shapeGeometry args={[cardShape]} />
              <meshStandardMaterial map={back || undefined} metalness={0.12} roughness={0.62} />
            </mesh>

          </group>
        </RigidBody>
      </group>

      <mesh ref={centerBand}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={bandTexture || undefined}
          repeat={[1, 1]}
          lineWidth={2.35}
        />
      </mesh>
    </>
  );
}
