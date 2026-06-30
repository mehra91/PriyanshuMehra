import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { database, ref, get, set } from '../config/firebase';
import { toast } from 'react-toastify';

export default function TotalFollowers() {
  const [totalFollower, setTotalFollower] = useState(0);
  const [userIP, setUserIP] = useState(null);
  const [hasFollowed, setHasFollowed] = useState(false);
  const [loading, setLoading] = useState(true);

  const sanitizeIP = (ip) => ip.replace(/\./g, '-');

  useEffect(() => {
    const initializeData = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        const safeIP = sanitizeIP(data.ip);
        setUserIP(safeIP);

        const followerRef = ref(database, 'followers/count');
        const snapshot = await get(followerRef);

        if (snapshot.exists()) {
          setTotalFollower(snapshot.val());
        }

        const ipRef = ref(database, `followers/ips/${safeIP}`);
        const ipSnapshot = await get(ipRef);

        if (ipSnapshot.exists()) {
          setHasFollowed(true);
        }

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, []);

  const handleFollower = async () => {
    if (!userIP || hasFollowed) return;

    const ipRef = ref(database, `followers/ips/${userIP}`);

    try {
      await set(ipRef, {
        timestamp: new Date().toISOString(),
        ip: userIP
      });

      const followerRef = ref(database, 'followers/count');
      const snapshot = await get(followerRef);

      const current = snapshot.exists() ? snapshot.val() : 0  ;
      const newCount = current + 1;

      await set(followerRef, newCount);

      setTotalFollower(newCount);
      setHasFollowed(true);

      toast.success("💖 Thanks for following!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });

    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 text-center border border-slate-700/50">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  return (
    <motion.div
      onClick={handleFollower}
      whileHover={!hasFollowed ? { scale: 1.05, y: -5 } : {}}
      whileTap={!hasFollowed ? { scale: 0.98 } : {}}
      className={`bg-black/80 backdrop-blur rounded-2xl p-8 text-center border transition-all duration-700 ${
        hasFollowed
          ? 'border-slate-700'
          : 'border-slate-700/50 cursor-pointer'
      }`}
    >
      <p className="text-slate-400 text-sm font-semibold mb-8">
        Total Followers
      </p>

      <div className="text-7xl mb-6">❤️</div>

      <p className="text-slate-300 font-semibold text-2xl">
        {totalFollower}
      </p>

      <p className="text-slate-400 text-sm">
        {totalFollower} Users Followed
      </p>
    </motion.div>
  );
}