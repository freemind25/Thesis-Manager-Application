import React from 'react';
import { Bell, Lock, Moon, Shield, User, Wifi } from 'lucide-react';

export const Settings = () => {
  const settings = [
    {
      category: 'Compte',
      items: [
        {
          title: 'Informations du profil',
          description: 'Mettre à jour vos informations personnelles et email',
          icon: <User className="w-5 h-5" />,
          action: 'Modifier'
        },
        {
          title: 'Mot de passe',
          description: 'Changer votre mot de passe ou activer la 2FA',
          icon: <Lock className="w-5 h-5" />,
          action: 'Mettre à jour'
        },
        {
          title: 'Paramètres de sécurité',
          description: 'Gérer les préférences de sécurité et l\'historique de connexion',
          icon: <Shield className="w-5 h-5" />,
          action: 'Gérer'
        }
      ]
    },
    {
      category: 'Préférences',
      items: [
        {
          title: 'Apparence',
          description: 'Basculer en mode sombre et personnaliser le thème',
          icon: <Moon className="w-5 h-5" />,
          action: 'Personnaliser'
        },
        {
          title: 'Notifications',
          description: 'Configurer les notifications par email et push',
          icon: <Bell className="w-5 h-5" />,
          action: 'Configurer'
        },
        {
          title: 'Connectivité',
          description: 'Gérer le mode hors ligne et les paramètres de synchronisation',
          icon: <Wifi className="w-5 h-5" />,
          action: 'Ajuster'
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Paramètres</h1>
      </div>

      <div className="space-y-6">
        {settings.map((section, index) => (
          <div key={index} className="border dark:border-gray-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg text-blue-600 dark:text-blue-300 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Zone Dangereuse</h2>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 className="text-red-600 dark:text-red-400 font-medium">Supprimer le compte</h3>
            <p className="text-sm text-red-500 dark:text-red-300 mt-1">
              Une fois votre compte supprimé, il n'y a pas de retour possible. Veuillez être certain.
            </p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Supprimer le compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};